import { departmentOptions } from "../../utils/department-options.utils";

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="personal-info-container">
      <select
        value={formData.department}
        className="select-input"
        required
        onChange={(event) =>
          setFormData({ ...formData, department: event.target.value })
        }
      >
        <option value="0">Select Department...</option>
        {departmentOptions.map((department) => (
          <option key={department.id} value={department.value}>
            {department.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
};

export default PersonalInfo;
