import "./Tile.css";

interface Props {
    number: number;
    image?: string;
}

export default function Tile({ number, image }: Props) {
    return (number as number) % 2 == 0 ? (
        <div className="tile black">
            {image && (
                <div
                    className="piece"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            )}
        </div>
    ) : (
        <div className="tile white">
            {image && (
                <div
                    className="piece"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            )}
        </div>
    );
}
