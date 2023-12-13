'use client';

import { useEffect, useState } from "react";
import { IContactUsForm } from "../utils/interfaces/IContactUsForm";
import { IContactUsInput } from "../utils/interfaces/IContactUsInput";
import ContactUsInput from "./ContactUsInput";
import Footer from "./Footer";

export default function ContactUs() {
    const [formData, setFormData] = useState<IContactUsForm>({
        name: '',
        email: '',
        message: '',
    });
    const [inputs, setInputs] = useState([] as IContactUsInput[]);

    useEffect(() => {

        const handleChange = (e: any) => {
            console.log("e", e.target.value);
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }

        const contactUsInputs: IContactUsInput[] = [
            {
                handleChange,
                name: 'Name',
                value: formData.name
            },
            {
                handleChange,
                name: 'Email',
                value: formData.email
            },
            {
                handleChange,
                name: 'Message',
                value: formData.message
            }
        ];


        setInputs(contactUsInputs);

    }, [formData]);


    const handleFeedbackSubmit = (e: any) => {
        e.preventDefault();
        console.log('formData', formData);
    }

    return (
        <div className="contact-us">
            <div className="contact-us__body">
                <div className="contact-us__title">Contact us</div>
                <form className="contact-us__form">
                    {
                        // 1 - decouple handleChange into a separate interface
                        inputs.map(input => <ContactUsInput key={input.name} name={input.name} value={input.value} handleChange={input.handleChange} />)
                    }
                    <button type="submit" className="contact-us__submit" onClick={handleFeedbackSubmit}>
                        Submit
                    </button>
                </form>

            </div>

            <Footer />
        </div>
    );
}