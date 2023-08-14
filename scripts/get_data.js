function updateData() {

    fetch('https://recherche-entreprises.api.gouv.fr/search?code_postal=69001')
    .then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(data));
    })
    .catch(err => console.error(err));
};

updateData();