import outline from "./../assets/copter.png";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import './Card.css';

const Card = ({ crewmate, onDelete }) => {
  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from("Crewmates")
        .delete()
        .eq("id", crewmate.id);

      if (error) {
        console.error("Error deleting crewmate:", error);
        alert(`Failed to delete crewmate: ${error.message || JSON.stringify(error)}`);
      } else {
        alert("Crewmate deleted successfully.");
        if (onDelete) {
          onDelete(crewmate.id);
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred while trying to delete the crewmate.");
    }
  };

  return (
    <div className="card-container">
      <Link to={`/${crewmate.id}`}>
        <div className="space-y-3">
          <img src={outline} alt="outline" className="card-image" />
          <p className="card-text crewmate-name">Name of Gadget: <span>{crewmate.name}</span></p>
          <p className="card-text crewmate-speed">Power of Gadget: <span>{crewmate.speed} Watts</span></p>
          <p className="card-text crewmate-color">Color of Gadget: <span>{crewmate.color}</span></p>
        </div>
      </Link>

      <div className="card-buttons">
        <Link to={`/${crewmate.id}/edit`} className="button-edit">
          Edit Gadget
        </Link>
        <button
          className="button-delete"
          onClick={handleDelete}
        >
          Delete Gadget
        </button>
      </div>
    </div>
  );
};

export default Card;
