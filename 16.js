async function fetchPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error ("Посттарды алу мүмкін болмады!");
      }
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Қате:", err);
    }
  }
  
  fetchPosts();