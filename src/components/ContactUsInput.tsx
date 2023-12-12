import { IContactUsInput } from "../utils/interfaces/IContactUsInput";

export default function ContactUsInput({ name, value, handleChange }: IContactUsInput) {

    return (
        <label className="contact-us-input">
            <span>{name}: </span>
            <input
                type="text"
                name={name.toLowerCase()}
                value={value}
                onChange={handleChange}
            />
        </label>
    );
}