import os

path = os.path.dirname(os.path.abspath(__file__))
files = os.listdir(path)

for index, file in enumerate(files):
  if '.png' not in file:
    os.rename(os.path.join(path, file), os.path.join(path, file + ".png"))
