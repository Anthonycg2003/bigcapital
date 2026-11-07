function col(knex, name) {
  return knex.client.config.client === 'pg' ? `"${name}"` : name;
}

exports.up = function (knex) {
  const referenceType = col(knex, 'REFERENCE_TYPE');
  return knex('accounts_transactions')
    .whereIn('referenceType', [
      'OtherIncome',
      'OtherExpense',
      'OwnerDrawing',
      'OwnerContribution',
      'TransferToAccount',
      'TransferFromAccount',
    ])
    .update({
      transactionType: knex.raw(`
        CASE
          WHEN ${referenceType} = 'OtherIncome' THEN 'OtherIncome'
          WHEN ${referenceType} = 'OtherExpense' THEN 'OtherExpense'
          WHEN ${referenceType} = 'OwnerDrawing' THEN 'OwnerDrawing'
          WHEN ${referenceType} = 'OwnerContribution' THEN 'OwnerContribution'
          WHEN ${referenceType} = 'TransferToAccount' THEN 'TransferToAccount'
          WHEN ${referenceType} = 'TransferFromAccount' THEN 'TransferFromAccount'
        END
      `),
      referenceType: knex.raw(`
        CASE
          WHEN ${referenceType} IN ('OtherIncome', 'OtherExpense', 'OwnerDrawing', 'OwnerContribution', 'TransferToAccount', 'TransferFromAccount') THEN 'CashflowTransaction'
          ELSE ${referenceType}
        END
      `),
    });
};

exports.down = function (knex) {
  const referenceType = col(knex, 'REFERENCE_TYPE');
  const transactionType = col(knex, 'TRANSACTION_TYPE');
  return knex('accounts_transactions')
    .whereIn('transactionType', [
      'OtherIncome',
      'OtherExpense',
      'OwnerDrawing',
      'OwnerContribution',
      'TransferToAccount',
      'TransferFromAccount',
    ])
    .update({
      referenceType: knex.raw(`
      CASE
        WHEN ${transactionType} = 'OtherIncome' THEN 'OtherIncome'
        WHEN ${transactionType} = 'OtherExpense' THEN 'OtherExpense'
        WHEN ${transactionType} = 'OwnerDrawing' THEN 'OwnerDrawing'
        WHEN ${transactionType} = 'OwnerContribution' THEN 'OwnerContribution'
        WHEN ${transactionType} = 'TransferToAccount' THEN 'TransferToAccount'
        WHEN ${transactionType} = 'TransferFromAccount' THEN 'TransferFromAccount'
        ELSE ${referenceType}
      END
    `),
      transactionType: knex.raw(`
      CASE
        WHEN ${transactionType} IN ('OtherIncome', 'OtherExpense', 'OwnerDrawing', 'OwnerContribution', 'TransferToAccount', 'TransferFromAccount') THEN NULL
        ELSE ${transactionType}
      END
    `),
    });
};
