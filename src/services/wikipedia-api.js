import Axios from 'axios'
import qs from 'qs'

const BASE_URL = 'http://en.wikipedia.org/w/api.php'

export async function getDetailsFromWikipedia(query) {
  const queryParam = {
    action: 'query',
    prop: 'extracts',
    exsentences: 10,
    exlimit: 1,
    titles: query,
    explaintext: 1,
    format: 'json',
    formatVersion: 2,
    origin: '*'
  }
  const result = await Axios.get(`${BASE_URL}?${qs.stringify(queryParam)}`)
  return result.data.query.pages
}
