import { genderOptions } from "../../utils/gender-options.util";

const SignUpInfo = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Enter Name..."
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter Contact..."
        value={formData.contact}
        onChange={(event) =>
          setFormData({ ...formData, contact: event.target.value })
        }
      />
      <select
        value={formData.gender}
        className="select-input"
        required
        onChange={(event) =>
          setFormData({ ...formData, gender: event.target.value })
        }
      >
        <option value="0">Select Gender...</option>
        {genderOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Enter Barcode..."
        value={formData.barcode}
        onChange={(event) =>
          setFormData({ ...formData, barcode: event.target.value })
        }
      />
    </div>
  );
};

export default SignUpInfo;
