import PropTypes from 'prop-types';
import css from './Transactions.module.css'

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.head}>
      <tr className={css.headContainer}>
        <th className={css.tablePart}>Type</th>
        <th className={css.tablePart}>Amount</th>
        <th className={css.tablePart}>Currency</th>
      </tr>
    </thead>

    <tbody className={css.body}>
      {items.map(item => (
        <tr className={css.bodyContainer} key={item.id}>
          <td className={css.tableDesc}>{item.type}</td>
          <td className={css.tableDesc}>{item.amount}</td>
          <td className={css.tableDesc}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}