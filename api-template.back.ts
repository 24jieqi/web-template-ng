/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable max-params */
import { CodeGenerator, Interface } from 'pont-engine';

function formatPath(rawPath: string) {
  const reg = /\{(\w+)\}/; // 匹配{something}
  const res = reg.exec(rawPath);
  if (res) {
    const index = res.index;
    const params = res[1];
    return [rawPath.substr(0, index) + '$' + rawPath.substr(index), params];
  }
  return [rawPath, ''];
}

function getRequestParams(params: string) {
  if (!params) {
    return '';
  }
  return `, ${params}: string | number`;
}

function getParamsShapeCode(
  queryParams: string,
  bodyParams: string,
  showQueryParams: boolean,
  showBodyParams: boolean,
) {
  const paramsInterface = `
  interface IParams{
    ${showQueryParams ? queryParams : ''}
    ${showBodyParams ? bodyParams : ''}
  }
  `;
  const propsName = [];
  if (showQueryParams) {
    propsName.push('queryParams');
  }
  if (showBodyParams) {
    propsName.push('bodyParams');
  }
  const paramsDestructureStr = `{${propsName.join(',')}}`;
  return [paramsInterface, paramsDestructureStr];
}

function getParamsNeeded(showQueryParams: boolean, showBodyParams: boolean) {
  const params = [];
  if (showQueryParams) {
    params.push(`queryParams: restParamsData[0]`);
  }
  if (showBodyParams && !showQueryParams) {
    params.push(`bodyParams: restParamsData[0]`);
  }
  if (showBodyParams && showQueryParams) {
    params.push(`bodyParams: restParamsData[1]`);
  }
  return params.join(',');
}

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    const queryParamsType = 'IQueryParams';
    const bodyParmas = inter.getBodyParamsCode();
    const queryParams = inter.getParamsCode(queryParamsType);
    const hasQueryParams = inter.parameters.filter(({ in: paramsIn }) => paramsIn === 'query').length > 0;
    const queryParamsTmp = `queryParams:${queryParamsType}`;
    const bodyParamsTmp = `bodyParams:${bodyParmas}`;
    const [paramsInterface, paramsDestructureStr] = getParamsShapeCode(
      queryParamsTmp,
      bodyParamsTmp,
      hasQueryParams,
      !!bodyParmas,
    );
    const [path, params] = formatPath(inter.path);
    const requestParamsCode = [bodyParmas ? 'data: bodyParams' : '', hasQueryParams ? 'params: queryParams' : '']
      .filter(Boolean)
      .join(',\n');
    return `
    /**
     * @desc ${inter.description}
     */
    import request from '@/utils/request'
    export ${queryParams}
    export ${paramsInterface}
    export function ${inter.name}(${paramsDestructureStr}:IParams = {} as IParams${getRequestParams(params)}) {
      return request<${inter.response.generateCode()}>({
        url: \`${path}\`,
        method: '${inter.method}',
        ${requestParamsCode}
      });
    }
    interface RqParams {
      queryKey: any;
      pageParam?: any;
    }
    // 需要和react-query一起使用
    export async function ${inter.name}Rq(params?: RqParams) {
      const [_, ...restParamsData] = params.queryKey;
      const fetchParams: IParams = {
        ${getParamsNeeded(hasQueryParams, !!bodyParmas)}
      }
      try {
        const res = await ${inter.name}(fetchParams);
        return res
      } catch (error) {
        throw new Error(error)
      }
    }
   `;
  }
}
