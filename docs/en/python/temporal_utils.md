# Utility functions for temporal data processing

For users that want a easy to stack/unstack temporal data, this module provides a set of functions to help with that.



## `mrio.temporal.unstack`

Unstacks a temporal GeoTIFF file into multiple GeoTIFF files, one 
for each time step.

```python
mrio.temporal.unstack(input_file: PathLike, output_dir: PathLike)
```


### Parameters

- `input_file` (PathLike): Path to the input Temporal GeoTIFF file.
- `output_dir` (PathLike): Path to the output directory where the unstacked files will be saved.

### Returns

A list of unstacked files. The files names are those specified in the `md:id` metadata attribute of the input file.


### Example

```python
import mrio

input_file = 'path/to/input.tif'
output_dir = 'path/to/output'

mrio.temporal.unstack(input_file, output_dir)
# >>> ['path/to/output/file1.tif', 'path/to/output/file2.tif', ...]
```

## `mrio.temporal.stack`

Stacks multiple GeoTIFF files into a single temporal GeoTIFF file.

```python
mrio.temporal.stack(files: List[PathLike], output_file: PathLike, files_dates: List[datetime.datetime], files_ids: Optional[List[str]] = None) -> Path
```

### Parameters

- `files` (List[PathLike]): List of paths to the input GeoTIFF files.
- `output_file` (PathLike): Path to the output Temporal GeoTIFF file.
- `files_dates` (List[datetime.datetime]): List of datetime objects representing the dates of the input files.
- `files_ids` (Optional[List[str]]): List of strings representing the ids of the input files. If not provided, the filenames will be used.

### Returns

The path to the output temporal GeoTIFF file as a pathlib.Path object.


### Example

```python
import mrio
from datetime import datetime

files = ['path/to/file1.tif', 'path/to/file2.tif']
output_file = 'path/to/output.tif'
files_dates = [datetime(2020, 1, 1), datetime(2020, 1, 2)]

# The files_ids parameter is optional
mrio.temporal.stack(files, output_file, files_dates)

# >>> 'path/to/output.tif'
```
