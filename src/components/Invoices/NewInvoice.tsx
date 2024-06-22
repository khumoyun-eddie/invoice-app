const NewInvoice = () => {
  return (
    <form className=''>
      <h1 className='mb-12 text-lg'>New Invoice</h1>
      <div className='grid grid-cols-3 gap-6 mb-12'>
        <h3 className='text-body-1 text-purple col-span-full'>Bill From</h3>
        <div className='col-span-full'>
          <label htmlFor='streetAdress' className='block mb-2 text-gray-400 text-body-1'>
            Street Address
          </label>
          <input
            type='text'
            id='streetAdress'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
        <div>
          <label htmlFor='city' className='block mb-2 text-gray-400 text-body-1'>
            City
          </label>
          <input
            type='text'
            id='city'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
        <div>
          <label htmlFor='postcode' className='block mb-2 text-gray-400 text-body-1'>
            Post Code
          </label>
          <input
            type='text'
            id='postcode'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
        <div>
          <label htmlFor='country' className='block mb-2 text-gray-400 text-body-1'>
            Country
          </label>
          <input
            type='text'
            id='country'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        <h3 className='text-body-1 text-purple col-span-full'>Bill To</h3>
        <div className='col-span-full'>
          <label htmlFor='name' className='block mb-2 text-gray-400 text-body-1'>
            Client's Name
          </label>
          <input
            type='text'
            id='name'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
        <div className='col-span-full'>
          <label htmlFor='email' className='block mb-2 text-gray-400 text-body-1'>
            Client's Email
          </label>
          <input
            type='email'
            id='email'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
        <div className='col-span-full'>
          <label htmlFor='clientStreetAdress' className='block mb-2 text-gray-400 text-body-1'>
            Street Address
          </label>
          <input
            type='text'
            id='clientStreetAdress'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
        <div>
          <label htmlFor='city' className='block mb-2 text-gray-400 text-body-1'>
            City
          </label>
          <input
            type='text'
            id='city'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
        <div>
          <label htmlFor='postcode' className='block mb-2 text-gray-400 text-body-1'>
            Post Code
          </label>
          <input
            type='text'
            id='postcode'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
        <div>
          <label htmlFor='country' className='block mb-2 text-gray-400 text-body-1'>
            Country
          </label>
          <input
            type='text'
            id='country'
            className='border border-gray-200 text-gray-600 text-body-1 rounded-lg focus:border-purple-light block w-full p-2.5'
            placeholder=''
            required
          />
        </div>
      </div>
    </form>
  );
};

export default NewInvoice;

{
  /* <form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */
}
