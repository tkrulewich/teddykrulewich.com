import "./Contact.css";

export function Contact()
{
    return (
        <div className="content">
            <h1>Contact</h1>
            <div className="contactInfo">
                E-Mail: <a href="mailto:teddy@teddykrulewich.com">teddy@teddykrulewich.com<br /></a>
                Phone: <a href="tel:5555555555">555-555-5555<br/></a>
            </div>
        </div>
    );
}