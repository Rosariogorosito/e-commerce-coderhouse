import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../styles/itemListContainer.css";
import ImgProduct from "../assets/Logo-productos.png";

const products = [
  {
    id: 1,
    image: ImgProduct,
    name: 'Mate diseño 100% personalizado',
    description: 'Descubre la magia de un mate único y exclusivamente para ti. Nuestro mate personalizado combina la tradición con un toque personal, pintado a mano con detalles que reflejan tu estilo y preferencias.',
    price: '$12.700',
    category: 'mates'
  },
  {
    id: 2,
    image: ImgProduct,
    name: 'Mate de diseño. Alelí clásico',
    description: 'Añade un toque de frescura y delicadeza con el Mate de Diseño Alelí. Este mate presenta un encantador patrón de flores en tonos rosados y blancos, complementado con una mariposa pintada en los mismos tonos. Ideal para quienes aprecian la belleza de los detalles sutiles y el diseño floral, el Alelí combina elegancia y naturaleza en una pieza única que realza tus momentos de disfrute.',
    price: '$12.900',
    category: 'mates'
  },
  {
    id: 3,
    image: ImgProduct,
    name: 'Tabla de diseño. Muna',
    description: 'Agrega un toque de sofisticación a tu decoración con la Tabla de Diseño Muna, una pieza artesanal que destaca por sus delicadas flores opacas pintadas a mano. Cada tabla presenta un diseño sutil y elegante que combina la belleza de la naturaleza con un acabado refinado. Ideal para quienes buscan una pieza que transmita calma y elegancia, la Tabla Muna es perfecta para complementar cualquier espacio con un estilo clásico y atemporal.',
    price: '$11.900',
    category: 'tablas'
  },
  {
    id: 4,
    image: ImgProduct,
    name: 'Tabla de diseño. Frida',
    description: ' Inyecta vida y color a tu ambiente con la Tabla de Diseño Frida, una obra de arte vibrante inspirada en el icónico estilo de la artista. Con una explosión de colores intensos y patrones exuberantes, esta tabla captura la esencia de la creatividad y la pasión. Cada trazo y detalle celebra la riqueza del arte latinoamericano, haciendo de esta tabla un elemento destacado para cualquier espacio que desee un toque de energía y carácter. ¡Deja que la Tabla Frida sea el centro de atención en tu decoración!',
    price: '$12.900',
    category: 'tablas'
  },
  {
    id: 5,
    image: ImgProduct,
    name: 'Tablas lisas para pintar',
    description: 'Para los emprendedores y artistas que buscan una base perfecta para sus creaciones, ofrecemos nuestras tablas lisas listas para pintar. Estas tablas están preparadas con una superficie impecable, ideal para aplicar cualquier diseño o técnica que imagines. Versátiles y de alta calidad, son perfectas para proyectos personalizados y artesanales. Aprovecha nuestra oferta para emprendedores y da rienda suelta a tu creatividad con una base que garantiza resultados excepcionales. ¡Empieza a crear y da vida a tus ideas con nuestras tablas listas para pintar!',
    price: '$2.900',
    category: 'tablas'
  },
  {
    id: 6,
    image: ImgProduct,
    name: 'Tablas de diseño. Amatista',
    description: 'Añade un toque de elegancia y misterio con la Tabla de Diseño Amatista, que presenta un espléndido juego de colores violetas cálidos. Cada tabla está pintada a mano con matices que evocan la serenidad y la sofisticación de las amatistas, creando una pieza que se destaca por su profundidad y belleza. Perfecta para quienes buscan una pieza decorativa que combine lujo y tranquilidad, la Tabla Amatista es ideal para realzar cualquier espacio con un toque de magia y estilo.',
    price: '$11.900',
    category: 'tablas'
  },
  {
    id: 7,
    image: ImgProduct,
    name: 'Mate de diseño. Bruna',
    description: 'El Mate de Diseño Bruna es una elegante pieza que presenta un diseño sofisticado con flores negras pintadas a mano. Cada flor es detallada y elegante, creando un contraste llamativo sobre el fondo del mate. Perfecto para quienes buscan un accesorio con un toque de distinción y un estilo moderno, este mate añade un aire de elegancia y minimalismo a cualquier momento de infusión.',
    price: '$12.700',
    category: 'mates'
  },
  {
    id: 8,
    image: ImgProduct,
    name: 'Mate de diseño. Malva',
    description: 'El Mate de Diseño Malva es una pieza encantadora que destaca por sus flores blancas adornadas con detalles dorados y hojas en tonos verdes claros. Este diseño refinado y sofisticado es perfecto para quienes buscan un toque de lujo y frescura en sus accesorios. Con su combinación de colores suaves y detalles dorados, el Mate Malva aporta un aire de elegancia y serenidad a cada sorbo.',
    price: '$12.800',
    category: 'mates'
  },
  {
    id: 9,
    image: ImgProduct,
    name: 'Mate de diseño. Solana',
    description: 'El Mate de Diseño Solana destaca por su vibrante diseño de sol y rayos dorados. Cada detalle está pintado a mano, capturando la energía y calidez del sol en una pieza única. Ideal para quienes buscan un accesorio que irradie vitalidad y optimismo, el Solana es perfecto para alegrar tus momentos de relajación con un toque de luminosidad y estilo.',
    price: '$12.800',
    category: 'mates'
  },
  {
    id: 10,
    image: ImgProduct,
    name: 'Mate de diseño. Luna',
    description: 'El Mate de Diseño Luna presenta un elegante patrón de lunas y estrellas en tonos plateados sobre un fondo oscuro. Cada elemento está pintado a mano con precisión, creando una atmósfera mágica y serena. Ideal para los amantes de la noche y el cielo estrellado, el Luna aporta un toque de misterio y sofisticación a tus momentos de mate.',
    price: '$12.800',
    category: 'mates'
  },
  {
    id: 11,
    image: ImgProduct,
    name: 'Mate de diseño. Alelí Lumina',
    description: 'Descubre la elegancia y el encanto del Mate de Diseño Alelí Lumina, una versión renovada del clásico Alelí. Este mate presenta un diseño encantador con flores en tonos rosados y blancos, pero añade un toque especial con detalles de brillo perlado que capturan la luz y realzan los colores. La mariposa pintada en tonos rosados y blancos, ahora con sutiles destellos metálicos, aporta un extra de sofisticación y magia a la pieza. Perfecto para quienes buscan un accesorio que combine belleza, delicadeza y un toque de luminosidad, el Alelí Lumina convierte cada momento de mate en una experiencia elegante y especial.',
    price: '$12.800',
    category: 'mates'
  },
  {
    id: 12,
    image: ImgProduct,
    name: 'Set cucharas de bambú. Bruna',
    description: 'Añade un toque de sofisticación a tu cocina con el Set de Cucharas Bruna. Cada cuchara está pintada a mano con elegantes flores negras que contrastan maravillosamente con el fondo. Este set combina funcionalidad y estilo, ideal para quienes buscan utensilios de cocina que sean tanto prácticos como decorativos. Las cucharas Bruna aportan un aire de modernidad y distinción a tu mesa.',
    price: '$10.800',
    category: 'sets'
  },
  {
    id: 13,
    image: ImgProduct,
    name: 'Set cucharas de bambú. Alelí',
    description: 'Transforma tu experiencia culinaria con el Set de Cucharas Alelí, que presenta un hermoso diseño de flores en tonos rosados y blancos, complementado con mariposas pintadas en los mismos tonos. Este set no solo es ideal para servir tus comidas con elegancia, sino que también añade un toque de frescura y delicadeza a tu cocina. Las cucharas Alelí convierten cada comida en una ocasión especial.',
    price: '$11.200',
    category: 'sets'
  },
  {
    id: 14,
    image: ImgProduct,
    name: 'Set cucharas de bambú. Malva',
    description: 'El Set de Cucharas Malva destaca por sus flores blancas adornadas con detalles dorados y hojas en tonos verdes claros. Cada cuchara está pintada a mano con precisión, creando un diseño refinado que aporta un toque de lujo y frescura a tu cocina. Perfecto para quienes aprecian los detalles elegantes, el Malva es ideal para servir con estilo y sofisticación.',
    price: '$11.800',
    category: 'sets'
  },
  {
    id: 15,
    image: ImgProduct,
    name: 'Set de Cuencos. Solana',
    description: 'Realza tu mesa con el Set de Cuencos Solana, que presenta un vibrante diseño de sol y rayos dorados pintados a mano. Cada cuenco captura la calidez y energía del sol, aportando un toque de luminosidad a tus comidas. Ideal para quienes buscan una presentación alegre y distintiva, el Solana convierte cada comida en una celebración.',
    price: '$16.800',
    category: 'sets'
  },
  
];

const fetchProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category === "all") {
        resolve(products); 
      } else {
        resolve(products.filter((product) => product.category === category));
      }
    }, 2000); 
  });
};

const ItemListContainer = () => {
  const { category } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductsByCategory(category || "all").then((filteredProducts) => {
      setProductList(filteredProducts);
      setLoading(false);
    });
  }, [category]);

  return (
    <div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="cards-container">
          {productList.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} className="card-image" />
              <h2 className="card-title">{product.name}</h2>
              <p className="card-description">{product.description}</p>
              <p>{product.price}</p>
              <div className="card-footer">
                <Link to={`/product/${product.id}`}>
                  <button className="view-details">Ver detalles</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
