export function stayInformed() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
      email,
      firstname,
      lastname,
      canISend,
      isLoading,
      successMessage,
      firstnameError,
      lastnameError,
      emailError,
      error,
    } = state;

    const handleChange = (e) => {
      dispatch({
        type: actions.fieldsChanged,
        fieldName: e.currentTarget.name,
        payload: e.currentTarget.value,
      });
    };

  return (
    <div className="bg-oil">
        <div className="container mx-auto flex justify-between flex-col md:flex-row px-8 md:px-0 pt-16 relative ">
          <div className="sm:px-12">
            <p className="font-sans uppercase text-white tracking-wider mb-4 font-bold text-center md:text-left">
              Mantente informado
            </p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white text-center md:text-left mb-4 md:pb-16">
              Suscríbete a nuestro <br />
              boletín de noticias
            </p>
          </div>
          <form
            className="flex flex-col w-full md:w-2/5 lg:w-1/3 mx-auto md:mx-0 bg-white p-4 shadow-2xl top-10 md:-top-12 md:right-12 relative md:absolute"
            onSubmit={onSubmit}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="firstname"
            >
              Nombre
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Ingresa tu nombre"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={firstname}
                onChange={handleChange}
              />
              {firstnameError && <Error />}
            </div>

            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="lastname"
            >
              Apellido
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Ingresa tu apellido"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={lastname}
                onChange={handleChange}
              />
              {lastnameError && <Error />}
            </div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative mb-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu email"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={email}
                onChange={handleChange}
              />
              {emailError && <Error />}
            </div>
            {error ? (
              <div className="bg-white flex items-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{error}</p>
              </div>
            ) : null}
            {successMessage ? (
              <div className="bg-white flex items-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{successMessage}</p>
              </div>
            ) : null}

            <button
              type="submit"
              className={`inline px-8 py-3 border border-primary bg-primary text-white uppercase text-sm tracking-wider font-bold ${
                isLoading ? 'disabled:cursor-not-allowed' : null
              }`}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
  )
}
