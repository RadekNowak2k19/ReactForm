import styles from "./App.module.scss";
export const App = () => {
	return (
		<div className={styles.formElement}>
			<div className={styles.formElement_steps}>Steps</div>
			<div className={styles.formElement_stepsData}>
				<div className={styles.fillBackground}>
					<div className={styles.fillContainer}>
						<div>
							<h2>Personal info</h2>
							<p>Please provide your name, email, address, and phone number.</p>
						</div>
						<form>
							<div className={styles.inputForm}>
								<div>
									<label htmlFor="">Name</label>
									<div>error</div>
								</div>
								<input type="text" placeholder="Name" />
							</div>
							<div className={styles.inputForm}>
								<div>
									<label htmlFor="">Name</label>
									<div>error</div>
								</div>
								<input type="text" placeholder="Name" />
							</div>
							<div className={styles.inputForm}>
								<div>
									<label htmlFor="">Name</label>
									<div>error</div>
								</div>
								<input type="text" placeholder="Name" />
							</div>
						</form>
					</div>
				</div>
				<div className={styles.buttons}>
					<button>Go Back</button>
					<button>NextStep</button>
				</div>
			</div>
		</div>
	);
};
