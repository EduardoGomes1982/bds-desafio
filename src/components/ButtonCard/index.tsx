import './styles.css';

type Props = {
    btLabel: string
};

const ButtonCard = ({ btLabel }: Props) => {
    return (
        <div className='bt-footer'>{btLabel}</div>
    );
};

export default ButtonCard;
