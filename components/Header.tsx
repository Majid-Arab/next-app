import headerStyle from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div>
        <h1 className={headerStyle.title}>
            <span>Web Dev</span> News
        </h1>
        {/* <style jsx>
            {`
                .title{
                    color: red;
                }
            `}
        </style> */}
    </div>
  )
}
