import PropTypes from "prop-types"

const Container = ({children}) => {
  return (
    <div className="h-full w-full md:w-5/6 lg:w-4/6 mt-16 md:mt-10  flex flex-col items-center justify-start gap-16">
    {children}
    </div>
  )
}

Container.propTypes={
    children: PropTypes.array
}

export default Container