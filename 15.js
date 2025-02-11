


 async function fetchPosts() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        if (!response.ok) {
            throw new Error('Сурет алу мүмкін емес!')
        }
        const data = await  response.json();
        console.log(data.message);
    } catch (error) {

     console.error('Kate oryn aldy', error);
            

    }

        
}
fetchPosts();