# Take the number of test cases
t = int(input())  # First input is the number of test cases

# Loop through each test case
for _ in range(t):
    n = int(input())  # Input for the number of rows for each test case
    for i in range(1, n + 1):
        # Print the pattern for this row
        for j in range(1, i + 1):
            print(j, end="")
        print()  # Move to the next line after each row
