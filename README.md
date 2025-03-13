# Velixo Technical Test
[Senior Quality Assurance Engineer Test Task](https://velixo-my.sharepoint.com/personal/lkabir_velixo_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Flkabir%5Fvelixo%5Fcom%2FDocuments%2FHIRING%2FSenior%20Quality%20Assurance%20Engineer%20Test%20Task%2Epdf&parent=%2Fpersonal%2Flkabir%5Fvelixo%5Fcom%2FDocuments%2FHIRING&ga=1)

## Task 1 - Test Cases

### Test Cases for String Increment Algorithm

### Assumptions
1. The input string contains at least one letter and at least one digit.
2. The numeric part is always at the end, with up to four digits.
3. The incremented number should retain leading zeros unless it overflows.
4. If an invalid input is provided, the function returns "Error".

### Test Cases

| **Test Case ID** | **Description** | **Input** | **Expected Output** |
|-----------------|---------------|---------|-----------------|
| TC001 | Increment a standard alphanumeric string | `FX001` | `FX002` |
| TC002 | Increment with three digits | `AA099` | `AA100` |
| TC003 | Increment with four digits | `BB9999` | `BB0000` |
| TC004 | Increment a string with lowercase letters | `fx001` | `fx002` |
| TC005 | Increment a string with mixed case letters | `Fx099` | `Fx100` |
| TC006 | Overflow case where numeric part resets | `ZZ9999` | `ZZ0000` |
| TC007 | Input with missing numeric part (invalid) | `ABC` | `Error` |
| TC008 | Input with missing alphabetic part (invalid) | `1234` | `Error` |
| TC009 | Input with special characters (invalid) | `AB@123` | `Error` |
| TC010 | Input with spaces (invalid) | `FX 001` | `Error` |

## Task 2 - E2E Test Automation

See `tests-velixo/`.
