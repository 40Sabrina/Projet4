import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({ name: "", description: "", stock: "" });
  const [newStock, setNewStock] = useState({});

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    axios.get("http://localhost:3310/api/article/")
    .then(response => {
      setArticles(response.data);
      // Initialiser le tableau newStocks avec le stock actuel de chaque article
      const initialNewStocks = {};
      response.data.forEach(article => {
        initialNewStocks[article.id] = article.stock;
      });
      setNewStock(initialNewStocks);
    })
      .catch(error => {
        console.error("Erreur lors de la récupération des articles :", error);
      });
  };
  

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewArticle({ ...newArticle, [name]: value });
};

const handleAddArticle = () => {
  axios.post("http://localhost:3310/api/article/", newArticle)
    .then((response) => {
      console.log("Article ajouté avec succès :", response.data);
      setArticles([...articles, response.data]);
      setNewArticle({ reference: "", name: "", description: "", stock: "" });
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout de l'article :", error);
    });
};

const handleUpdateStock = async (id, stock) => {
  try {
    await axios.put(`http://localhost:3310/api/article/${id}`, { stock });
    // Mettre à jour la liste des articles après la mise à jour
    fetchArticles();
  } catch (error) {
    console.error("Erreur lors de la mise à jour du stock :", error);
  }
};

const handleDeleteArticle = (id) => {
  axios.delete(`http://localhost:3310/api/article/${id}`)
    .then(() => {
      // Mettre à jour la liste des articles après la suppression
      fetchArticles();
    })
    .catch(error => {
      console.error("Erreur lors de la suppression de l'article :", error);
    });
};


  return (
    <div>
    <section className="ContainerArticleGET">
    <h1>Voici mon GET, PUT and DELETE:</h1>
    <div>
        {articles?.map((article) => (
          <div key={article.id}>
             <div className="cardArticle">
             <label htmlFor={`ref-${article.id}`}>Ref:</label>
             <input 
             className="refArticle" 
             type="text" 
             value={article.reference} 
             readOnly 
             />
             <label htmlFor={`name-${article.id}`}>Nom:</label>
             <input 
             className="nameArticle" 
             type="text" 
             value={article.name} 
             readOnly 
             />
             <label htmlFor={`description-${article.id}`}>Description:</label>
             <input 
             className="descriptionArticle" 
             type="text" 
             value={article.description} 
             readOnly 
             />
             <label htmlFor={`stock-${article.id}`}>Stock:</label>
             <input 
             className="stockArticle" 
             type="text" 
             value={article.stock} 
             readOnly 
             />
             </div>
             <div className="containerPutDelete">
             <div className="containerNewStock">
             <label htmlFor={`newStock-${article.id}`}>Nouveau stock:</label>
             <input 
             className="newStockArticle" 
             id={`newStock-${article.id}`}
             type="text" 
             value={newStock[article.id]}
                onChange={(e) => setNewStock({ ...newStock, [article.id]: e.target.value })}
              />
             <button onClick={() => handleUpdateStock(article.id, newStock[article.id])}>Modifier</button>
             </div>
             <button onClick={() => handleDeleteArticle(article.id)}>Supprimer l&apos;article</button>
             </div>
         </div>
         ))}
    </div>
    </section>

    <section className="ContainerArticlePOST">
    <h1>Voici mon POST:</h1>
    <input
          type="text"
          placeholder="Référence"
          name="reference"
          value={newArticle.reference}
          onChange={handleInputChange}
        />
    <input
          type="text"
          placeholder="Nom de l'article"
          name="name"
          value={newArticle.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description de l'article"
          name="description"
          value={newArticle.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Stock de l'article"
          name="stock"
          value={newArticle.stock}
          onChange={handleInputChange}
        />
        <button onClick={handleAddArticle}>Ajouter un article</button>
      </section>
    </div>
  );
}

export default Home;