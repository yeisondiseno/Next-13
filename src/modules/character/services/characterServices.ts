import apiRoutes from '../constants/apiRoutes';
import axios from '@lib/axios';

const CharacterServices = {
  getCharacters: () => {
    return axios.get(apiRoutes.character).then((res) => res?.data);
  },
  getCharacterById: ({ id }: { id: string | number }) => {
    return axios.get(`${apiRoutes.character}/${id}`).then((res) => res.data);
  },
};

export default CharacterServices;
