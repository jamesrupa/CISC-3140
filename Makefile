lab1:
	@echo "Running AWK Script Lab1: "
	awk -f lab1.awk data_lab1/data.csv | sort -nrk5 | tee ranking.txt