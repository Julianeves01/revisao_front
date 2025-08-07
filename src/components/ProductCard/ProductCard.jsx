import styles from './ProductCard.module.css';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.productCard} data-category={product.category}>
            <div className={styles.productImage}>
                <Image
                    src={product.image}
                    alt={product.name || product.title || 'Imagem do produto'}
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
            <div className={styles.productTitle}>{product.title}</div>
            <div className={styles.productPrice}>{product.price}</div>
            <div className={styles.productDescription}>{product.description}</div>
            <div className={styles.productrating}>
                <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span>(4.6) - 4.754 avaliações</span>
            </div>
        </div>
    );
};

export default ProductCard;