"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";
import { Categories } from "../_types/types";

const Form = () => {
  const [expenseTitle, setExpenseTitle] = useState<string>("");
  const [expenseValue, setExpenseValue] = useState<number>(0);
  const [expenseDate, setExpenseDate] = useState<string>("");
  const [expenseCategory, setExpenseCategory] = useState<Categories>("Food");
  const [expenseIncome, setExpenseIncome] = useState<boolean>(false);
  const [expenseNote, setExpenseNote] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(
      `expenseTitle: ${expenseTitle}`,
      `expenseValue: ${expenseValue}`,
      `expenseDate: ${expenseDate}`,
      `expenseCategory: ${expenseCategory}`,
      `expenseIncome: ${expenseIncome}`,
      `expenseNote: ${expenseNote}`
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col bg-purple-200 p-8 rounded-3xl w-1/2 items-center gap-4">
      <StyledInput
        type="text"
        placeholder={expenseIncome ? "Income title" : "Expense title"}
        value={expenseTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setExpenseTitle(e.target.value);
        }}
      />
      <StyledInput
        type="number"
        placeholder={expenseIncome ? "Income value" : "Expense value"}
        value={`${expenseValue}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setExpenseValue(+e.target.value);
        }}
      />
      <StyledInput
        type="date"
        placeholder={expenseIncome ? "Income date" : "Expense date"}
        value={`${expenseDate}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setExpenseDate(e.target.value);
        }}
      />
      <select
        value={expenseCategory}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setExpenseCategory(e.target.value as Categories)
        }>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Housing">Housing</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Shopping">Shopping</option>
        <option value="Travel">Travel</option>
        <option value="Other">Other</option>
      </select>

      <StyledInput
        type="checkbox"
        value={`${expenseIncome}`}
        onChange={() => {
          setExpenseIncome(!expenseIncome);
        }}
      />

      <StyledButton type="submit" text="click" />
    </form>
  );
};

export default Form;
