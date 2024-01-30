async function fetchtitle() {
    try {
      const checked = await fetch('https://jsonplaceholder.typicode.com/posts');  //firstly fetch data in api


      if (!checked.ok) {                 // if (!checked.ok) condition check data successfully fetch or not.


        throw new Error('Failed to fetch data from the API'); // if data doesnot fetch showing this error.
      }
  
      const posts = await checked.json();  // fecth data convert into json format.

      const titles = posts.slice(0, 5).map(post => post.title);   // slice is extract only first five post titles.
      return titles;
    } catch (error) {
      throw error; 
    }
  }
  
  fetchtitle()
    .then(titles => console.log(titles))  // title show in colsole.
    .catch(error => console.error(`Error: ${error.message}`)); // any type of error showing in console