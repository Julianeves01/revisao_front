import styles from './Header.module.css';
import Image from 'next/image';

const Header = ({ titulo, descricao }) => {
    const tituloExibido = titulo ? titulo : "SoftByte";
    const descricaoExibida = descricao ? descricao : "Encontre a tecnologia perfeita para você!";
    return (
        <div className={styles.header}>
            <h1>
                <Image 
                    src="/image/carrinho-de-compras.png" 
                    alt="Carrinho de compras" 
                    width={32} 
                    height={32} 
                    style={{ marginRight: '10px', verticalAlign: 'middle' }}
                />
                {tituloExibido}
            </h1>
            <p>{descricaoExibida}</p>
            <p>📊 Total de produtos: <span id="totalProducts">12</span></p>
        </div>
    );
}

export default Header;
