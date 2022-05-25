package BankAccountTests;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.csit314.roadSideAssistance.BankAccount.BankAccountException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Bank Account tests
 *      testCreateBankAccount
 *      testValidateBankAccount
 */
@SpringBootTest(classes = BankAccountTest.class)
class BankAccountTest {

    @Test
    @DisplayName("Simple Test of Bank Account Creation")
    void testCreateBankAccount() throws BankAccountException {
        BankAccount bankAccount = new BankAccount("Jay's Account",
                "000-001", "10002000");

        assertEquals(bankAccount.getAccountName(), "Jay's Account", "Checking account name");
        assertEquals(bankAccount.getBsb(), "000-001", "Checking bsb");
        assertEquals(bankAccount.getAccountNumber(), "10002000", "Checking account number");
    }

    @Test
    @DisplayName("Simple Test of Bank Account Constraint")
    void testValidateBankAccount() throws BankAccountException {
        BankAccountException thrown = Assertions.assertThrows(BankAccountException.class, () -> {
            BankAccount bankAccount = new BankAccount("Jay's Account",
                    "000-001", "");
        });
    }
}