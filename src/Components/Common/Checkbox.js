export default function Checkbox({ className, text, }) {
    return (
        <p className={className}>
            <span className="tex-dark">{text}</span>
        </p>
    );
}