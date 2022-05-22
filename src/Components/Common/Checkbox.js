export default function Checkbox({ className, text, }) {
    return (
        <label className={className}>
            <input type="checkbox" /> <span className="tex-dark">{text}</span>
        </label>
    );
}