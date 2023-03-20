import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  console.log(cryptoData)
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData
  return (
    <li className="list-top">
      <div className="crypto-rate">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="crypto-text">{currencyName}</p>
      </div>
      <div className="crypto-rate">
        <p className="crypto-text">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
