export default function Button({ classes, onClick, children }) {
  return <button className={`${classes} m-2 font-medium`} onClick={onClick}>{children}</button>
}