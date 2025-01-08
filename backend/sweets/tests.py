from django.test import TestCase

useEffect(() => {
    axios.get('http://localhost:8000/sweets/products/')
        .then(response => {
            console.log('Fetched data:', response.data); // Debug line
            setProducts(response.data);
        })
        .catch(error => console.error('Error fetching products:', error));
}, []);
