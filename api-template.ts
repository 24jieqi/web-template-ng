/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Interface, CodeGenerator } from 'pont-engine';

const REQUEST_PARAM_KEY = 'Params';

/**
 * 格式化为常量的字符串
 * @example 'saveSomeData' -> 'SAVE_SOME_DATA'
 */
const formatConstStr = (s: string) => s.replace(/\B([A-Z])/g, '_$1').toUpperCase();
export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    const method = inter.method.toUpperCase();
    const paramsCode = inter.getParamsCode(REQUEST_PARAM_KEY, this.surrounding);
    const paramList = inter.getParamList().filter((param) => param.paramType);
    const hasBody = paramList.filter((p) => p.paramKey === 'body');
    const APIUpName = inter.name.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    const paramsTypeName = `${APIUpName}Params`;
    const paramsTypeCode = `${REQUEST_PARAM_KEY}${hasBody.length ? ` & ${hasBody[0].paramType}` : ''}`;
    const requestParamsStr = `params: ${paramsTypeName}, headers?:any`;
    const useQueryKeyName = formatConstStr(`Use${APIUpName}Key`);
    const useQueryKeyValue = `${inter.path}_${method}`;

    return `
// ${inter.description} 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description ${inter.description} 接口 URL 参数/GET
 */
export ${paramsCode}

/**
 * @description ${inter.description} 接口参数
 */
export type ${paramsTypeName} = ${paramsTypeCode}

/**
 * @description ${inter.description} 接口
 */
export const ${inter.name} = (${requestParamsStr}) => {
  return request.request<${inter.responseType}>({...request.buildOptions('${inter.path}', params, '${method}'), headers})
}

/**
 * @description ${inter.description} hooks 默认的 key
 */
export const ${useQueryKeyName} = '${useQueryKeyValue}';

// export const ${inter.name}Query = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return ${inter.name}(params);
// }

// /**
//  * @description ${inter.description} hooks
//  */
// export const use${APIUpName} = (${requestParamsStr}, key = '${useQueryKeyName}') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => ${inter.name}(params, headers),
//   })
// }
   `;
  }
}
