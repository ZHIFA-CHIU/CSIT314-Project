package com.csit314.roadSideAssistance.BankAccount;

/**
 * Bank Account Exception
 * Custom exception for the Bank Account classes
 */
public class BankAccountException extends IllegalStateException
{
    public BankAccountException(String message)
    {
        super(message);
    }
}
