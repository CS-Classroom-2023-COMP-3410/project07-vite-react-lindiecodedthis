import Button from './Button';

function Card({ title, description, imageUrl, actions = [] }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px 0',
      maxWidth: '300px'
    }}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      )}

      <h3 style={{ marginTop: '10px' }}>{title}</h3>
      <p>{description}</p>

      {actions.length > 0 && (
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              variant={action.variant || "primary"}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;