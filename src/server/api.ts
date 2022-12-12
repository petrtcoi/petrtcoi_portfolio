import axios, { AxiosResponse } from 'axios'
import * as R from 'ramda'

Promise<{ data: T[], isError?: boolean }>




export const fetchEntity = async <T>(entity: string): Promise<{ data: T[] }> => {
  return R.pipe(
    R.always(entity),
    fetchData,
    R.andThen(
      R.ifElse(
        (data) => data.status !== 200,
        R.always(() => { throw new Error(`${entity} fetch error`) }),
        R.pick(['data']),
      )),
    R.otherwise(() => { throw new Error(`${entity} fetch error`) }),
  )()
}


async function fetchData(entity: string) {
  return await axios.get(`http://localhost:3002/${entity}`, { validateStatus: () => true })
} 