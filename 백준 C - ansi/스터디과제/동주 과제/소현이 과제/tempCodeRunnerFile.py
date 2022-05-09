
import pandas as pd

td=pd.read_csv('pisa2009train.csv',low_memory=False)

print(td.describe())
print("The number of all students is 3663")
print("The average of the variable 'grade' is 10.089817")
print("The average of the variable 'schoolsize' is 1369.316767")

print("The correlations between variables are:")

corr=td.corr(method="pearson")
print(corr)

import matplotlib.pyplot as plt
import seaborn as sns

sns.heatmap(td.isnull(), yticklabels=False, cbar=False, cmap="viridis")
plt.show()
print(td.info())

print("The 'fatherHS, fatherWork, motherBachelors, fatherBachelors, minutesPerWeekEnglish, studentsInEnglish'  variables have many missing values")
print("The 'raceeth, preschool, expectBachelors, motherHS, motherWork,selfBornUS, motherBornUS, fatherBornUS, englishAtHome, computerForSchoolwork, read30MinsADay, schoolHasLibrary, schoolSize' variables have some missing values")
print("And there are a few rows that are entirely missing values.")

plt.figure(figsize=(12,7))
sns.boxplot(x='urban', y='schoolSize', data=td, palette='winter')
plt.show()

print(td.groupby(['urban'], as_index=False,).mean())

def impute_schoolSize(cols):
    schoolSize = cols[0]
    urban=cols[1]
    if td.isnull(schoolSize):
        if urban ==1:
            return 1736
        
        else:
            return 1149
    else:
        return schoolSize

td['schoolSize']=td[['schoolSize','urban']].apply(impute_schoolSize,axis=1)
print(td['schoolSize'])
