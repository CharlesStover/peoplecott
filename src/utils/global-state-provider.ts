import { createProvider } from 'reactn';

interface State {
  search: string;
}

export default createProvider<State>({
  search: '',
});
