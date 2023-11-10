import { SearchBarProps } from 'types/searchBar';
import Button from './Button';

const SearchBar = ({
  query,
  handleFormSubmit,
  onChange,
  loading,
  ...rest
}: SearchBarProps) => {
  return (
    <div className="mx-auto">
      <div className="relative text-center sm:shadow-sm dark:bg-transparent">
        <form onSubmit={handleFormSubmit} action="/search">
          <label
            className="mx-auto mt-8 relative min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
            htmlFor="search-bar"
          >
            <input
              id="search-bar"
              placeholder="Procure o artista"
              value={query}
              onChange={onChange}
              className="px-6 py-2 w-full rounded-md text-black flex-1 outline-none bg-white"
              required
              data-cy="search-bar"
              {...rest}
            />
            <Button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-slate-800 border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
              disabled={loading}
              loading={loading}
              text={loading ? 'Pesquisando' : 'Pesquisar'}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
