# Utility functions for tCOG data processing

For users who want an easy way to stack/unstack tCOG, this module provides a set of functions to help with that.

## `mrio.temporal.unstack`

Unstacks a temporal COG file into multiple COG files, one 
for each time step.

```python
mrio.temporal.unstack(input_file: PathLike, output_dir: PathLike)
```

### Parameters

- `input_file` (PathLike): Path to the input Temporal COG file.
- `output_dir` (PathLike): Path to the output directory where the unstacked files will be saved.

### Returns

A list of unstacked files. The file names are those specified in the `id` coordinate values.


### Example

```python
import mrio

input_file = 'path/to/input.tif'
output_dir = 'path/to/output'

mrio.temporal.unstack(input_file, output_dir)
# >>> ['path/to/output/file1.tif', 'path/to/output/file2.tif', ...]
```

## `mrio.temporal.stack`

Stacks multiple COG files into a single temporal COG file.

```python
mrio.temporal.stack(files: List[PathLike], output_file: PathLike, time_starts: List[datetime.datetime], time_ends: Optional[List[datetime.datetime]] = None, ids: Optional[List[str]] = None) -> Path
```

### Parameters

- `files` (List[PathLike]): List of paths to the input COG files.
- `output_file` (PathLike): Path to the output Temporal COG file.
- `time_starts` (List[datetime.datetime]): List of datetime objects representing the `time_start` of the input files.
- `time_ends` (Optional[List[datetime.datetime]]): List of datetime objects representing the `time_end` of the input files.
- `ids` (Optional[List[str]]): List of strings representing the ids of the input files. If not provided, the filenames will be used.

### Returns

The path to the output temporal COG file as a pathlib.Path object.

### Example

```python
import mrio
from datetime import datetime

files = ['path/to/file1.tif', 'path/to/file2.tif']
output_file = 'path/to/output.tif'
time_starts = [datetime(2020, 1, 1), datetime(2020, 1, 2)]

# The files_ids parameter is optional
mrio.temporal.stack(files, output_file, time_starts)

# >>> 'path/to/output.tif'
```
