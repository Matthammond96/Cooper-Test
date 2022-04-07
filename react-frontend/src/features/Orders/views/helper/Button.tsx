
interface ButtonProps {
  title: string
  accent?: boolean
}

export const Button = ({title, accent}: ButtonProps) => (
  <div className="btn-contianer">
    <button className={`btn${accent ? " secondary" : ""}`}>{title}</button>
  </div>
)