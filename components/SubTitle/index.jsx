const SubTitle = ({ children, className }) => {
  return (
    <h3 className={`text-lg font-semibold uppercase ${className}`}>
      {children}
    </h3>
  )
}

export default SubTitle
