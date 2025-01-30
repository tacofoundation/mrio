# rasterio-like I/O API

The simplest way to handle multi-dimensional and temporal COG files 
is through the `mrio.open` function. This function serves as a drop-in 
replacement for `rasterio.open`.

Additionally, `mrio` provides two convenient wrapper functions:

- **`mrio.read`**: Equivalent to calling `mrio.open(mode='r')`, designed for reading data.

- **`mrio.write`**: Equivalent to calling `mrio.open(mode='w')`, designed for writing data.


## `mrio.open`

Opens a multi-dimensional or temporal COG file in read or write mode.

```python
mrio.open(file_path: PathLike, mode: str = Mode.READ, engine: str = "xarray", **kwargs: Any) -> DatasetReader | DatasetWriter:
```

**Parameters:**

- `file_path`: Path to the dataset file. It can be a string or Path object.
- `mode`: Operation mode, either 'r' for read or 'w' for write.
- `engine`: The engine used to read the data. The default is 'xarray'. Other options include 'numpy'.
- `**kwargs`: Additional keyword arguments passed to the reader or writer.

**Returns:**

Either a `DatasetReader` for read mode or `DatasetWriter` for write mode.

**Raises:**

- MRIOError: If an invalid mode is provided.
- ValueError: If the file path is invalid or of wrong type.
- RasterioError: If there's an error opening the file.

**Example:**

```python
import mrio

with mrio.open("example.tif") as tensor:
    # Display all the metadata
    profile = src.profile

    # Read all the data - (I)
    tensor_xr = tensor.read()

    # Read all the data - (II)
    tensor_xr = tensor[:]

    # Partial read
    tensor_slice = tensor[0:10, 0:10]

with mrio.open("output.tif", mode="w", **profile) as dst:
    dst.write(data)
```


## `mrio.read`

Convenience function to read a dataset file. This is equivalent to calling open() with read mode.

```python
mrio.read(file_path: PathLike, engine: str = "xarray", **kwargs: Any) -> DatasetReader:
```

**Parameters:**

- `file_path`: Path to the dataset file. It can be a string or Path object.
- `engine`: The engine used to read the data. The default is 'xarray'. Other options include 'numpy'.
- `**kwargs`: Additional keyword arguments passed to the reader.

**Returns:**
    A `DatasetReader` object.

**Raises:**

- ValueError: If the file path is invalid or of wrong type.
- RasterioError: If there's an error opening the file.


## `mrio.write`

Convenience function to write a dataset file. This is equivalent to calling open() with write mode.

```python
mrio.write(file_path: PathLike, data: DataArray, **kwargs: Any) -> DatasetWriter:
```

**Parameters:**

- `file_path`: Path to the dataset file. It can be a string or Path object.
- `data`: Data to write to the file.
- `**kwargs`: Additional keyword arguments passed to the writer.

**Returns:**

A DatasetWriter object.

**Raises:**

- ValueError: If the file path is invalid or of wrong type.
- RasterioError: If there's an error opening the file.

**Example:**

```python
import mrio

with mrio.open("output.tif", mode="w", **profile) as dst:
    dst.write(data)
```
