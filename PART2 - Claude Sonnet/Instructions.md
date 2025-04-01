Feel free to test these prompts as they are, or tweak them however you like!

# Example Prompts for Claude Sonnet

## Regex

- Can you help me understand this regex pattern? r'^(?=.*?[A-Z])(?=.*?[a-z]).{10,24}$'
- Generate a regex pattern for validating an email address
- Generate a regex pattern for validating a phone number

## Providing code as context

Given this function:
```python
def process_file(import_id=None):
    all_files = glob.glob(config.IMPORT_DIRECTORY + "*.txt")

    if len(all_files) == 0:
        return []

    import_data = (pd.read_csv(f, sep='~', encoding='latin-1',
                               warn_bad_lines=True, error_bad_lines=False,
                               low_memory=False) for f in all_files)

    data = pd.concat(import_data, ignore_index=True, sort=False)
    data.columns = [col.lower() for col in data.columns]
    data = data.where((pd.notnull(data)), None)

    data['import_id'] = import_id
    data['date'] = data['date'].apply(lambda x: convert_date_string(x))

    insert_data_into_database(data=data, table='sales')
    return all_files
```

- Explain how this function works and what each part does
- This function is returning OperationalError. How can I fix this?
- Does this function have any glaring issues?
- Generate documentation for this function
- Generate unit tests for this function
- Split this function into smaller, more manageable pieces

## Code Generation

- Create a React component for a responsive navigation bar
- Create a function that sorts an array of meals by calories
- Create a function that converts a date string to a date object

# Project

Take a look at the project <TODO>in this section. Can you understand what it does? What bugs can you find? Use Claude to fix the bugs you find... and maybe ask Claude to find more bugs! Also, ask Claude to add a new feature: <TODO>
