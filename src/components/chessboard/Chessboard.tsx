import Tile from "../tile/Tile";
import "./Chessboard.css";
import PawnWhite from "../../images/pawn_w.png";
import PawnBlack from "../../images/pawn_b.png";
import RookWhite from "../../images/rook_w.png";
import RookBlack from "../../images/rook_b.png";
import KnightWhite from "../../images/knight_w.png";
import KnightBlack from "../../images/knight_b.png";
import BishopWhite from "../../images/bishop_w.png";
import BishopBlack from "../../images/bishop_b.png";
import QueenWhite from "../../images/queen_w.png";
import QueenBlack from "../../images/queen_b.png";
import KingWhite from "../../images/king_w.png";
import KingBlack from "../../images/king_b.png";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
    image: string;
    x: number;
    y: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
    pieces.push({ image: PawnBlack, x: i, y: 6 });
    pieces.push({ image: PawnWhite, x: i, y: 1 });
}

pieces.push({ image: RookWhite, x: 0, y: 0 });
pieces.push({ image: RookWhite, x: 7, y: 0 });
pieces.push({ image: RookBlack, x: 0, y: 7 });
pieces.push({ image: RookBlack, x: 7, y: 7 });
pieces.push({ image: KnightWhite, x: 1, y: 0 });
pieces.push({ image: KnightWhite, x: 6, y: 0 });
pieces.push({ image: KnightBlack, x: 1, y: 7 });
pieces.push({ image: KnightBlack, x: 6, y: 7 });
pieces.push({ image: BishopWhite, x: 2, y: 0 });
pieces.push({ image: BishopWhite, x: 5, y: 0 });
pieces.push({ image: BishopBlack, x: 2, y: 7 });
pieces.push({ image: BishopBlack, x: 5, y: 7 });
pieces.push({ image: QueenWhite, x: 3, y: 0 });
pieces.push({ image: QueenBlack, x: 3, y: 7 });
pieces.push({ image: KingWhite, x: 4, y: 0 });
pieces.push({ image: KingBlack, x: 4, y: 7 });

let activePiece: HTMLElement | null = null;

function grapPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    if (element.classList.contains("piece")) {
        const x = e.clientX;
        const y = e.clientY;
        element.style.position = "absolute";
        element.style.left = `${x - 50}px`;
        element.style.top = `${y - 50}px`;
        activePiece = element;
    }
}
function movePiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (activePiece && activePiece.classList.contains("piece")) {
        const x = e.clientX;
        const y = e.clientY;
        activePiece.style.position = "absolute";
        activePiece.style.left = `${x - 50}px`;
        activePiece.style.top = `${y - 50}px`;
    }
}

export default function Chessboard() {
    let board = [];
    for (let i = verticalAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            let image = undefined;

            pieces.forEach((piece) => {
                if (piece.x === j && piece.y === i) {
                    image = piece.image;
                }
            });

            board.push(<Tile key={`${i}${j}`} image={image} number={i + j} />);
        }
    }
    return (
        <div
            onMouseMove={movePiece}
            onMouseDown={grapPiece}
            onMouseUp={() => (activePiece = null)}
            className="chessboard"
        >
            {board}
        </div>
    );
}
