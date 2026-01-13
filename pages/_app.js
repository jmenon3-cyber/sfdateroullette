import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className="app-footer">@jmenon3</div>
    </>
  )
}
