var PropTypes = require('prop-types');

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£',
};

item.propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionFull: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
};

export default function App() {
  return (
    <div className="container">
      <div className="background-element" />
      <div className="highlight-window">
        <div className="highlight-overlay" />
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
};

function ShopItemFunc({item}) {
  return (
    <div class="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div class="description">{item.descriptionFull}</div>
      <div class="highlight-window mobile">
        <div class="highlight-overlay" />
      </div>
      <div class="divider" />
      <div class="purchase-info">
        <div class="price">£{item.price}.00</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
};
