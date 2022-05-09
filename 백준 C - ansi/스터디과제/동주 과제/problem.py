import numpy as np

a = np.array([
    [1,1,-1],
    [2,-1,3],
    [1,2,1]])
b = np.array([0,9,8])

a_rev = np.linalg.inv(a)

c = np.linalg.solve(a,b)


print(a)
print("\n")
print(b)
print("\n")
print(a_rev)

print("\n")
print(np.linalg.solve(a_rev,b))
